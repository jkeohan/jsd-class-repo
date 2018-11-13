/* eslint-env mocha, node */
describe('JavaScript datatypes and arrays independent practice', () => {
  let p1Arr;
  let p2Arr;

  beforeEach(() => {
    p1Arr = ['image1.png', 'image2.png', 'image3.png'];
    p2Arr = [8, 6, 7, 5];
  });


  describe('Question 1: Create an array of image sources.', () => {
    it('should be an array of image sources', () => {
      expect(q1).to.eql(p1Arr);
    });
    it('should contain 3 items', () => {
      expect(q1).to.be.length(p1Arr.length);
    });
  });

  describe('Question 2: Get the first element of the first array', () => {
    it('should be the first item from the first array', () => {
      expect(q2).to.eql('image1.png');
    });
  });

  describe('Question 3: Get the length of the first array', () => {
    it('should be length of the first array', () => {
      expect(q3).to.eql(3);
    });
  });

  describe('Question 4: Get the last element of the first array', () => {
    it('should be last elem of the first array', () => {
      expect(q4).to.eql('image3.png');
    });
  });

  describe('Question 5: Create a new array; increase each by 1', () => {
    it('should be one more than the original array', () => {
      expect(q5).to.eql([9, 7, 8, 6]);
    });
  });

  describe('Question 6: Find the average of the numbers in the array', () => {
    it('should be one number', () => {
      expect(q6).to.be.a('number');
    });

    it('should be the average of the numbers in the array', () => {
      expect(q6).to.eql(7.5);
    });
  });
});
