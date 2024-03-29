import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
  
      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${(props) => props.theme['red-300']};
      color: ${(props) => props.theme['red-300']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
  
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
  
      &:not(:disabled):hover {
        background: ${(props) => props.theme['red-300']};
        border: 1px solid ${(props) => props.theme['red-300']};
        color: ${(props) => props.theme.white};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['red-300']};
    }
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
