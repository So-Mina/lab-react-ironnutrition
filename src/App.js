import './App.css'
import { useState, useEffect } from "react"
import { Row, Divider, Button, message } from 'antd'
import Foods from "./foods.json"
import FoodBox from './Components/FoodBox/FoodBox'
import AddFoodForm from './Components/AddFoodForm/AddFoodForm'
import Search from './Components/Search/Search'

function App() {

  const [foodList, setFoodList] = useState(Foods)
  const [showForm, setShowForm] = useState(false)
  const [filteredFoodList, setFilteredFoodList] = useState(foodList)

  const handleAddFood = (foodToAdd) => {
    setFoodList([...foodList, foodToAdd])
    setFilteredFoodList([...filteredFoodList, foodToAdd])
  }

  const handleDeleteFood = (foodToDelete) => {
    const updatedFoodList = foodList.filter((food) => food !== foodToDelete)
    setFoodList(updatedFoodList)
    setFilteredFoodList(updatedFoodList)
  }

  useEffect(() => {
    if (foodList.length === 0) {
      message.warning('Oh no, there is no food left in the list! Add some.')
    }
  }, [foodList])  

  const toggleForm = () => {
    setShowForm(!showForm)
  }
    
  return (
    <div className="App">

    {showForm ? (
        <>
        <AddFoodForm handleAddFood={handleAddFood} />
        <Button onClick={toggleForm}>Hide Form</Button>
        </>
      ) : (
        <Button onClick={toggleForm}>Add New Food</Button>
      )}

    <Search foodList={foodList} setFilteredFoodList={setFilteredFoodList} />

    <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {filteredFoodList.map((food) => (
        <FoodBox key={food.name} food={food} onDelete={handleDeleteFood} />
        ))}
      </Row>

    </div>
  )
}

export default App