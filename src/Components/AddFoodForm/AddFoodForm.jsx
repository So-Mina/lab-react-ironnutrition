import React, {useState} from 'react'
import { Divider, Input } from 'antd'

function AddFoodForm (props) {
  const { handleAddFood } = props

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')

  const handleNameChange = (event) => setName(event.target.value)
  const handleImageChange = (event) => setImage(event.target.value)
  const handleCaloriesChange = (event) => setCalories(event.target.value)
  const handleServingsChange = (event) => setServings(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Creating a new food')
    const foodToAdd = {
      name,
      image,
      calories,
      servings,
    }

    handleAddFood(foodToAdd)
    setName('')
    setImage('')
    setCalories('')
    setServings('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} placeholder='Food name'/>

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} placeholder='Image URL'/>

      <label>Calories</label>
      <Input value={calories} type="number" min='1' onChange={handleCaloriesChange} placeholder='Calories'/>

      <label>Servings</label>
      <Input value={servings} type="number" min='1' onChange={handleServingsChange} placeholder='Servings'/>

      <button type="submit" >Create</button>
    </form>
  )
}

export default AddFoodForm