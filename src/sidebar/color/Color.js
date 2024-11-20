import Input from '../../components/Input'
import './Color.css'

export default function Color({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title price-title'>Color</h2>
      <div>
      <lable className='sidebar-label-container'>
         <input type='radio' onChange={handleChange} value='' name='test2'/>
         <span className='checkmark'></span>All
         </lable>


      <Input handleChange={handleChange}
      value='black'
      title='Black'
      name='test3'
      color='black'
      />
      <Input handleChange={handleChange}
      value='blue'
      title='Blue'
      name='test3'
      color='blue'
      />
      <Input handleChange={handleChange}
      value='green'
      title='Green'
      name='test3'
      color='green'
      />
      <Input handleChange={handleChange}
      value='white'
      title='White'
      name='test3'
      color='gray'
      />
      </div>
    </div>
  )
}
