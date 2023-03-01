import { Divider, Input } from 'antd'

function Search({ foodList, setFilteredFoodList }) {

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase()
    const filteredList = foodList.filter((food) => food.name.toLowerCase().includes(searchText))
    setFilteredFoodList(filteredList)
  }

  return (
    <>
      <Divider>Search Food</Divider>

      <label>Search</label>
      <Input type="text" onChange={handleSearch} placeholder="search your food here"/>
    </>
  )
}

export default Search
