import {Engine} from "../Engine";

describe("game engine tests", () => {
  
  
  it("is defined", () => {
    expect(Engine).toBeDefined();
  });

  it("initialize the game starting balance with $10", () => {
    const engine = new Engine();
    expect (engine.getBalance()).toBe(10);
  })

  it("", () => {
  })

});
