import { sum } from "../sum"


test("Check sum of 2 numbers", () => {

    //Assertion
     expect(sum(2,5)).toBe(7);   
     expect(sum(-2,5)).toBe(3);   
})