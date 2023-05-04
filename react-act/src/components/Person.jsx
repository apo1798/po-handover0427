// const Person = (props) => {
//   console.log(props) 
//   // props = {info: {name: 'Bob', age: 12, isCute: true}}
const Person = ({info, children}) => {
  // props = {info: {name: 'Bob', age: 12, isCute: true}}

  // const name = props.info.name
  console.log(children)

  const {name, age, isCute} = info
  // const {info:{name,age,isCute}} = props
  //  {info: {name: 'Bob', age: 12, isCute: true}}

  console.log(info)


  return (
    <div>Person<br/>{children}</div>
  )
}
export default Person