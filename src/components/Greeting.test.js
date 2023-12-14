import Greeting from "./Greeting";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("Greeting component",()=>{
    test("renders Hellow World as a text",()=>{
        render(<Greeting/>);
       const hellowWorldElement= screen.getByText("Hellow World!")
       expect(hellowWorldElement).toBeInTheDocument()
    })
    test('renders"good to see you" if the button was NOT clicked',()=>{
        render(<Greeting/>);
        const outputElement= screen.getByText("good to see you",{exact:false})
        expect(outputElement).toBeInTheDocument()
    })
    test('renders "changed!" if the button was clicked',()=>{
        render(<Greeting/>);
        const buttonElement=screen.getByRole("button")
       userEvent.click(buttonElement)
       const Element= screen.getByText("changed!")
       expect(Element).toBeInTheDocument()
    })
    test('does not renders "good to see you" if button was clicked',()=>{
        render(<Greeting/>);
        const buttonElement=screen.getByRole("button")
       userEvent.click(buttonElement)
       const Element= screen.queryByText("good to see you",{exact:false})
       expect(Element).toBeNull()

    })
})

