import * as chai from "chai";
let { expect, assert } = chai;
chai.Should();

import {
  capitalizeText,
  createArray,
  allObj,
  CheckPositivity,
  MathUtils,
  Mult,
  obj3,
} from "../index.js";
//* task 1
describe("Test capitalizeText", () => {
  it(" should take string and return strung", () => {
    expect(capitalizeText("hello"));
    let r = capitalizeText("hello");
    expect(r).to.be.a("string");
  });
  it(" should take string and return strung Capitaliz", () => {
    let str = "hello";
    let cap = str.toUpperCase();
    let r = capitalizeText(str);
    expect(r).to.equal(cap);
  });
  it(" should take only string else throw error", () => {
    let input = 194;
    const ecpected = "parameter should be string";

    expect(() => capitalizeText(input)).to.throw(ecpected);
  });
  it(" should throw TypeError if input is not string", () => {
    expect(() => capitalizeText(194)).to.throw(
      TypeError,
      "parameter should be string",
    );
  });
  it("Accept only one param", () => {
    let expected = "only one param allowed";

    expect(() => capitalizeText("a", "b")).to.throw(Error, expected);
  });
});



//* task 2

describe("Test createArray", () => {
  it("function should return array", () => {
    let input = "123";
    let result = createArray(input);
    expect(result).to.be.an("array");
  });
  it("if we pass 3 it should return array of length 3 and include 1", () => {
    const result = createArray(3);

    expect(result).to.have.lengthOf(3);
    expect(result).to.include(1);
  });
//   it("should return array after delay", async () => {
//     await new Promise((resolve) => setTimeout(resolve, 5000));

//     let result = createArray(3);

//     expect(result).to.be.an("array");
//   });
  it("should work after delay", function (done) {
    this.timeout(5000);

    setTimeout(() => {
      const result = createArray(3);
      expect(result).to.be.an("array");
      done();
    }, 3000);
  });
});

//*using assert

  
describe("Test createArray", () => {
  it("function should return array", () => {
    let input = "123";
    let result = createArray(input);

    assert.isArray(result);
  });

  it("if we pass 3 it should return array of length 3 and include 1", () => {
    const result = createArray(3);

    assert.lengthOf(result, 3);
    assert.include(result, 1);
  });

 it("should return array after delay (async/await)", function () {
   this.timeout(10000);

   return new Promise((resolve) => {
     setTimeout(resolve, 3000);
   }).then(() => {
     const result = createArray(3);
     assert.isArray(result);
   });
 });

  it("should work after delay (done)", function (done) {
    this.timeout(10000);

    setTimeout(() => {
      const result = createArray(3);

      assert.isArray(result);
      done();
    }, 3000);
  });
});

// //*pending
it("should be skipped", function () {
  this.skip();
});
it.skip("should be skipped pending2", function () {});
it("should be skipped pending3");


// //*task3
let [obj, obj1, obj2] = allObj;
describe("Object Equality", function () {
  it("obj1 should deep equal obj2 - expect", function () {
    expect(obj1).to.deep.equal(obj2);
  });

  it("obj1 should deep equal obj2 - should", function () {
    obj1.should.deep.equal(obj2);
  });

  it("obj1 should deep equal obj2 - assert", function () {
    assert.deepEqual(obj1, obj2);
  });
});



//* Task4

describe("Number mor than 0 CheckPositivity", () => {
    it("if num == 4 using expect", () => {
        let n = 4;
        let expected = true;
        let output = CheckPositivity(n);
        expect(output).to.equal(expected)
    })
    it("if num==4 using sholud ", () => {
        let n = 4;
        let expected = true;
        let output = CheckPositivity(n);
        output.should.to.equal(expected);
        
    })
    it("if num==4 using assert ", () => {
        let n = 4;
        let expected = true;
        let output = CheckPositivity(n);
        assert.equal(output, expected)
        
    });




});


describe("x = -1 and x=0  CheckPositivity", () => {
    let n1 = 0;
    let n2 = -1;

    let out1 = CheckPositivity(n1);
    let out2 = CheckPositivity(n2);

    let expected = false;
    it("-1 and 0 with expectt", () => {
        expect(out1).to.equal(expected);
        expect(out2).to.equal(expected);
    });
    it("-1 and 0 with should", () => {
        out1.should.to.equal(expected);
        out2.should.to.equal(expected);
    });
    it("-1 and 0 with assert", () => {
          assert.strictEqual(out2, out1);
        //   assert.isFalse(out1);
        // assert.equal(out1, expected);
        // assert.equal(out2, expected);
      
    });
});


//*task5 

describe("MathUtils task", () => {
  it("should respond to sub (static)", () => {
    expect(MathUtils).itself.respondTo("sub");
  });

  it("should respond to sum (prototype)", () => {
    const obj = new MathUtils();
    expect(obj).to.respondTo("sum");
  });
    it("is x instance of MathUtils ", () => {
        const instanc = new MathUtils();
        expect(instanc).instanceOf(MathUtils);
    });
     it("should create instance from MathUtils using assert", () => {
       const obj = new MathUtils();

       assert.instanceOf(obj, MathUtils);
     });
    
    it("Should parameters is numbers type", () => {
        let n1 = 1;
        let n2 = 2;
       
       
        expect(n1).to.be.a("number");
        assert.typeOf(n2, "number");

    });
    
    it("Should parameters length =2  sub  static method", () => {

        assert.lengthOf(MathUtils.sub, 2);

    });
    it("Should parameters length =2  sum prototype method", () => {

        let obj = new MathUtils();

        assert.lengthOf(obj.sum, 2);

    });
    it("Should parameters length =2  sum prototype method using excepr", () => {

        let obj = new MathUtils();
       expect(obj.sum.length).to.equal(2);

       

    });

});


//*Task6

   describe("Test Mult function using assert", () => {
     it("should throw error when n <= 0", () => {
       assert.throws(
         () => {
           Mult(0);
         },
         Error,
         "must number more than 0",
       );
     });
       
       it("Should return number abouve zero", () => {
           let n = 1;
           let out = Mult(n);
           let excpected = 2;
           assert.strictEqual(out, excpected);
           
       });
   });



//*task7
// export let obj3 = { a: { b: [{ x: 1 }] } };
describe("Nested ", () => {
    it("using assert check 'a.b[0]' will include {x: 1}", () => {
        let nstd = obj3.a.b[0];
       
       assert.propertyVal(nstd, "x", 1);
       });
   })





