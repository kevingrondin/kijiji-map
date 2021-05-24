import React, { useState, useRef } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Filters from '~components/Filters'
import Logo from '~components/Logo'
import ListAds from '~components/ListAds'
import ListAdsSkeleton from '~components/ListAdsSkeleton'
import Loading from '~components/Loading'
import { useAds } from '~hooks/useAds'
import dynamic from 'next/dynamic'
import { formatQuery, getDefaultValue } from '~utils/filters'

const Map = dynamic(() => import('~components/Map'), { ssr: false })

const MapSearcher = () => {
  const listRef = useRef(null)
  const [query, setQuery] = useState(formatQuery(getDefaultValue()))
  const [adToFocus, setFocus] = useState(null)
  const { data, isLoading } = useAds(query)

  const handlePaginate = ({ selected }) => {
    setQuery({ ...query, _page: selected })
    if (listRef.current) {
      listRef.current.scrollTo(0, 0)
    }
  }

  return (
    <>
      <Container
        py={4}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        boxShadow="1px 1px 3px #ccc"
        bg="white"
        pos="relative"
        zIndex="10000"
      >
        <Logo />
        <Filters setQuery={setQuery} isLoading={isLoading} />
      </Container>
      <Flex overflow="hidden" flex={1}>
        <Box
          ref={listRef}
          backgroundColor="white"
          w="45vw"
          minW="680px"
          maxW="750px"
          overflowY="auto"
          px={6}
        >
          <Loading isLoading={isLoading} skeleton={<ListAdsSkeleton />}>
            {/* @ts-ignore */}
            <ListAds
              page={query._page}
              ads={data?.ads}
              nbAds={data?.count}
              setFocus={setFocus}
              handlePaginate={handlePaginate}
            />
          </Loading>
        </Box>
        {/* @ts-ignore */}
        <Map ads={data?.ads} adToFocus={adToFocus} setQuery={setQuery} />
      </Flex>
    </>
  )
}

export default MapSearcher
