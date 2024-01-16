/*
Hi! Need help with React Testing Library? The best way to get it is by forking
this repository, making a reproduction of your issue (or showing what you're
trying to do), and posting a link to your fork on our Discord chat:

https://testing-library.com/discord
*/

import React from 'react'
import styled from '@emotion/styled'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

const StyledDiv = styled('div')({
  '[aria-checked="true"]:has(+ [aria-checked="false"])': {
    color: 'red',
  }
});

function DoubleCheckbox() {
  return (
    <StyledDiv>
      <input type="checkbox" />
      <input type="checkbox" />
    </StyledDiv>
  )
}

test('renders double checkbox', async () => {
  render(<DoubleCheckbox />)
  expect(screen.getByRole('radiogroup')).toBeTruthy();
})
