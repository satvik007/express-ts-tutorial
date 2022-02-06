const multiply = (a: number, b: number): number => a * b

describe('multiply', () => {
  it('is return correct number?', () => {
    expect(multiply(10, 6)).toBe(60)
  })
})
