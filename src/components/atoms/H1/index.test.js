import React from 'react'
import { render } from '@testing-library/react'
import H1 from './index'

describe('H1 tests', () => {
  it('should render h1 correctly', () => {
    const pageHeader = 'This is a page header'
    const { getByTestId } = render(<H1>{pageHeader}</H1>)
    expect(getByTestId('h1')).toContainHTML(pageHeader)
  })
})
