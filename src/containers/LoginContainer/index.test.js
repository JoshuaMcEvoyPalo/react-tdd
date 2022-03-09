import { render } from '@testing-library/react'
import LoginContainer from './index'

describe('LoginContainer test', () => {
  it('should render LoginContainer correctly', () => {
    const { getByTestId } = render(<LoginContainer />)
    expect(getByTestId('login-page')).toBeInTheDocument()
  })
})