import Button from '../components/Button'
import './Recmd.css'

export default function Recmd({handleClick}) {
  return (
    <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <Button onClickHandler={handleClick} value="" title="All Products"/>
                <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
                <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
                <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
                <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
            </div>
        </div>
    </>
  )
}
