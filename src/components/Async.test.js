import { render,screen } from "@testing-library/react";
import Async from "./Async";
describe(("Async component", ()=>{
    test("render posts if request succeeds",async()=>{
        window.fetch=jest.fn()
        window.fetch.mockResolvedValueOn({
            json:async ()=>[{id:1,title:"first post"}]
        })
        render(<Async/>)
        const listItemElements=await screen.getAllByRole("list item")
       expect(listItemElements).not.toHaveLength(0)
    })
}))