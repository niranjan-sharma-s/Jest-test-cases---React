/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react'
import App, { camelCaseSpace } from './App'

test('initial text and color', () => {
  render(<App/>)
  const buttonText = screen.getByRole('button', { name: 'Click to Change Color to blue' })
  expect(buttonText).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(buttonText)

  expect(buttonText).toHaveStyle({ backgroundColor: 'blue' })

  expect(buttonText.textContent).toBe('Click to Change Color to red')

  expect(buttonText).toBeEnabled()
})

test('button enabled test', () => {
  render(<App/>)
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()
})

test('disable button , checkbox checked', () => {
  render(<App/>)
  const button = screen.getByRole('button')
  const checkBox = screen.getByRole('checkbox', { name: 'disable button' })

  fireEvent.click(checkBox)
  // expect(checkBox).toBeChecked() default checked , not feasible condition
  expect(button).toBeDisabled()

  fireEvent.click(checkBox)
  expect(button).toBeEnabled()
})

test('grey button on disable', () => {
  render(<App/>)
  const button = screen.getByRole('button')
  const checkBox = screen.getByRole('checkbox', { name: 'disable button' })

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'grey' })

  fireEvent.click(checkBox)
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

describe('test camelCase function', () => {
  test('convert camelCase with one word', () => {
    expect(camelCaseSpace('red')).toBe('red')
  })

  test('camelcase with two words', () => {
    expect(camelCaseSpace('redBlue')).toBe('red Blue')
  })

  test('camelcase wth three words', () => {
    expect(camelCaseSpace('redBlueGreen')).toBe('red Blue Green')
  })
})
