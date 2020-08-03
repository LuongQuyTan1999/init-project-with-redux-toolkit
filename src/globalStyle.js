import { createGlobalStyle } from 'styled-components'
import { CSS_RESET, CLASS_UTILITY } from './utils/css'

const GlobalStyle = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
   body {
    background: ${({ theme }) => theme.background.container};
  }
  .hover\\:text-primary {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-error {
    color: ${({ theme }) => theme.text.error};
  }
  .text-status {
    color: ${({ theme }) => theme.text.status};
  }
  .text-status-failed {
    color: ${({ theme }) => theme.text.statusFailed};
  }
  .text-header {
    color: ${({ theme }) => theme.text.textHeader};
  }
  .text-secondary {
    color: ${({ theme }) => theme.text.secondary};
  }
  .text-header-table {
    color: ${({ theme }) => theme.text.headerTable};
  }
  .text-title {
    color: ${({ theme }) => theme.text.title};
  }
  .text-statistic-value {
    color: ${({ theme }) => theme.text.statisticValue};
  }
  .text-black {
    color: ${({ theme }) => theme.text.black};
  }
  .bg-primary-1 {
    background-color: #fff0f2;
  }
  .bg-primary {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }
  .bg-header {
    background: ${({ theme }) => theme.background.header};
  }
  .bg-container {
    background: ${({ theme }) => theme.background.container};
  }
  .border-top-split-color {
    border-top: 1px solid ${({ theme }) => theme.border.colorSplit};
  }
  /*----------------- Aimation -----------------*/
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /*----------------- Text -----------------------*/
  .text-14-22 {
    font: normal normal 14px/22px ${({ theme }) =>
      theme.fonts.primary}, sans-serif;
  }
  .text-16-22 {
     font: normal normal 16px/22px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-14-28 {
     font: normal normal 14px/28px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-13-18 {
     font: normal normal 13px/18px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-30-36 {
    font: normal normal 30px/36px ${({ theme }) =>
      theme.fonts.primary}, sans-serif;
  }
  .text-500-24-40 {
    font: normal 500 24px/40px ${({ theme }) =>
      theme.fonts.primary}, sans-serif;
  }
  .text-300-12-20 {
     font: normal 300 12px/20px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-300-16-24 {
     font: normal 300 12px/20px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-300-14-22 {
     font: normal 300 12px/20px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
  .text-16-20 {
     font: normal normal 16px/20px ${({ theme }) =>
       theme.fonts.primary}, sans-serif;
  }
`

export default GlobalStyle
