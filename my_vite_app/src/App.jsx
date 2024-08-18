import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import UserLogged from "./UserLogged.jsx"
import List from "./List.jsx"
import CompState from "./CompState.jsx"
import ProductForm from "./ProductForm.jsx"
import FavoriteCar from "./FavoriteCar.jsx"
import UpdateList from "./UpdateList.jsx"
import UseEffectComp from "./useEffectComp.jsx"
import CompA from "./NestedComp/CompA.jsx"
import UseRef from "./UseRef.jsx"

import './index.css'

function App() {

  const foods = [
    {id: 1, name: "Butter Chicken", calories: 225},
    {id: 2, name: "Chilly Chicken", calories: 925},
    {id: 3, name: "Sahi Paneer", calories: 325},
    {id: 4, name: "Biriyani", calories: 265},
]

  return (
    <>

    <h5>Header</h5>

    <Header />

    
    <h5>Food</h5>
    <Food />
    <hr />

    <h5>Card</h5>
    <Card name="Sandip Basak" data="I will earn 1 crore rupees before 2nd November,2024" justBoolean={false} />
    <Card name="Napolean Hill" data="You will become rich have faith in yourself" justBoolean={true}/>
    {/* PropTypes failed */}
    {/* <Card name="Napolean Hill" data={36} justBoolean={true}/> */}

    <Card justBoolean={true}/>

    <hr />

    <h5>Button</h5>
    <Button />
    <hr />

    <h5>UserLogged</h5>
    <UserLogged logged={true} username="Crazy_Champ" />
    <br />
    <UserLogged logged={false} />
    <hr />

    <h5>List</h5>
    {foods.length > 0 ? <List items={foods} catagory="Food" /> : null}

    <hr />

    <h5>CompState</h5>
    <CompState />

    <hr />

    <h5>ProductForm</h5>
    <ProductForm />

    <hr />

    <h5>FovoriteCar</h5>
    <FavoriteCar />

    <hr />

    <h5>Update List</h5>
    <UpdateList />
    <hr />
    <h5>useEffectComp</h5>

    <UseEffectComp />

    <hr />

    <CompA />

    <hr />

    <UseRef />

    <hr />
    <h5>Footer</h5>
    <Footer />
    </>
  )
}

export default App
