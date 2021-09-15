// @ts-nocheck
import { extendTheme } from '@chakra-ui/react'
import {
  Button,
  Select,
  Tag,
  Container,
  Divider,
  Input,
  Textarea,
} from './components'

const theme = extendTheme({
  styles: {
    global: {
      h1: {
        fontSize: '5xl',
        fontWeight: '900',
      },
    },
  },
  fonts: {
    body: 'mabry, sans-serif',
    heading: 'mabry, serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '.925rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.35rem',
    '2xl': '1.6rem',
    '3xl': '2.15rem',
  },
  colors: {
    inputHover: '#8ea4da',
    gray: {
      '50': '#F2F2F2',
      '100': '#E5E5E5',
      '200': '#C4C4C4',
      '300': '#ADADAD',
      '400': '#969696',
      '500': '#808080',
      '600': '#666666',
      '700': '#4D4D4D',
      '800': '#333333',
      '900': '#1A1A1A',
    },
    purple: {
      '50': '#F3EDF8',
      '100': '#DDCBEB',
      '200': '#C7AADF',
      '300': '#B189D2',
      '400': '#9B68C5',
      '500': '#8547B8',
      '600': '#6A3993',
      '700': '#502A6F',
      '800': '#351C4A',
      '900': '#1B0E25',
    },
  },
  radii: {
    sm: '2px',
    md: '4px',
    lg: '20px',
    xl: '32px',
    xxl: '40px',
  },
  shadows: {
    sm: '0 2px 4px 0 rgba(0,0,0,0.05)',
    md: '0 2px 8px 0 rgba(0,0,0,0.1)',
    lg: '0px 10px 15px #a9a9a9',
  },
  components: {
    Button,
    Container,
    Select,
    Tag,
    Divider,
    Input,
    Textarea,
  },
  textStyles: {
    h1: {
      fontSize: '5xl',
      fontWeight: '900',
      lineHeight: 'base',
    },
  },
  breakpoints: {
    base: '0em',
    xl: '87.5rem',
  },
  gradient: {
    blueViolet: 'linear-gradient(to right, #8CA6DB, #B993D6)',
  },
  space: {
    full: '-1.5rem',
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    22: '5.5rem',
    24: '6rem',
    26: '6.5rem',
    28: '7rem',
    30: '7.5rem',
    32: '8rem',
    34: '8.5rem',
    36: '9rem',
    38: '9.5rem',
    40: '10rem',
    42: '10.5rem',
    44: '11rem',
    46: '11.5rem',
    48: '12rem',
    50: '12.5rem',
    52: '13rem',
    54: '13.5rem',
    56: '14rem',
    58: '14.5rem',
    60: '15rem',
    62: '15.5rem',
    64: '16rem',
  },
  layerStyles: {
    priceInput: {
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '10px',
      py: 2,
      px: 2.5,
      _hover: {
        borderColor: 'inputHover',
      },
    },
    filter: {
      height: '52px',
      borderRadius: 'xl',
      border: { base: 'none', lg: '1px solid #E5E5E5' },
      padding: '5px 25px',
      cursor: 'pointer',
      _hover: {
        borderColor: 'inputHover',
      },
    },
  },
})

export default extendTheme(theme)
