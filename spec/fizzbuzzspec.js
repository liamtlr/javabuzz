describe('Javabuzz',function() {
  var javabuzz;
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByThree(1)).toBe(false);
    });
  });
});
