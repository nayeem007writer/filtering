import Category from './category/Category'
import Color from './color/Color'
import Price from './price/Price'
import './Sidebar.css'
import { TiShoppingCart } from "react-icons/ti"
export default function Sidebar({handleChange}) {
  return (
    <section className='sidebar'>
        <div className='sidebar-logo'>
            <h1>
                <TiShoppingCart />
            </h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>

    </section>
  )
}
