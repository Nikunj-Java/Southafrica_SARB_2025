import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers',()=>{
    const result=service.add(3,5);
    expect(result).toBe(8);
  });
  it('should subtract two numbers',()=>{
    const result=service.subtract(25,5);
    expect(result).toBe(20);
  })
  it('should multiply two numbers',()=>{
    const result=service.multiply(25,5);
    expect(result).toBe(125);
  });
  it('should divide two numbers',()=>{
    const result=service.divide(25,5);
    expect(result).toBe(5);
  })

  it('should throw an error when divide by zero',()=>{
    expect(()=>service.divide(12,0)).toThrowError('Cannot divide by zero');
  })

  it('should check if a number is even',()=>{
    expect(service.isEven(4)).toBe(true);
    expect(service.isEven(7)).toBe(false)
  })

  it('should match  the object',()=>{
    const obj1={id:10};
    const obj2={id:10};
    expect(obj1).toEqual(obj2);
  })
  it('should match the string',()=>{
    const str="Nikunj Soni"
    expect(str).toMatch("Soni")
  })

  it('should check the truthyness',()=>{
    expect(service.add(20,20)).toBeTruthy();
  })

  it('should check the toBeUndefined',()=>{
    const value=undefined;
    expect(value).toBeUndefined();
  })

  it('should check the value toBeGreaterThanOrEqual',()=>{
    expect(service.add(10,5)).toBeGreaterThanOrEqual(12)
  })

  it('should check the value toBeLessThamOrEqual',()=>{
    expect(service.multiply(10,2)).toBeLessThanOrEqual(20);
    expect(service.add(10,2)).toBeLessThanOrEqual(20);
  })

  it('should check the value toBeClosedTo',()=>{
    expect(service.add(0.1,0.2)).toBeCloseTo(0.3)
    expect(service.add(0.1,0.2)).toBeCloseTo(0.301)
  })

  it('should check the instaanceof',()=>{
    const math= new MathService();
    expect(math).toBeInstanceOf(MathService);
  })

  it('should check the value toBeDefined',()=>{
    const value=50;
    expect(value).toBeDefined();
  })

  it('should check the value not toBeDefined',()=>{
    const value=undefined;
    expect(value).not.toBeDefined();
  })
});
