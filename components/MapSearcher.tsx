import React, { useState } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Filters from '~components/Filters'
import Logo from '~components/Logo'
import ListAds from '~components/ListAds'
import ListAdsSkeleton from '~components/ListAdsSkeleton'
import Loading from '~components/Loading'
import { useAds } from '~hooks/useAds'
import { PER_PAGE } from '~constants'
import { useAdsCount } from '~hooks/useAdsCount'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('~components/Map'), { ssr: false })

const MapSearcher = () => {
  const [query, setQuery] = useState({
    _limit: PER_PAGE,
    _page: 0,
  })
  const [adToFocus, setFocus] = useState(null)
  const { data: ads, isLoading } = useAds(query)
  const { data: nbAds } = useAdsCount(query)

  const handlePaginate = ({ selected }) => {
    setQuery({ ...query, _page: selected })
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
        <Filters setQuery={setQuery} />
      </Container>
      <Flex overflow="hidden" flex={1}>
        <Box
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
              ads={ads}
              nbAds={nbAds}
              setFocus={setFocus}
              handlePaginate={handlePaginate}
            />
          </Loading>
        </Box>
        {/* @ts-ignore */}
        <Map ads={ads} adToFocus={adToFocus} />
      </Flex>
    </>
  )
}

export default MapSearcher