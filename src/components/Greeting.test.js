import Greeting from "./Greeting";
import { render,screen } from "@testing-library/react";
describe("Greeting component",()=>{
    test("renders Hellow World as a text",()=>{
        render(<Greeting/>);
       const hellowWorldElement= screen.getByText("Hellow World!")
       expect(hellowWorldElement).toBeInTheDocument()
    })
})
