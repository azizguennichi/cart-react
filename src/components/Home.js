import styled from 'styled-components'
const Container = styled.div`
height: 40vh;

display: flex;
align-items: center;

flex-direction: column;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
color: white;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
color: #cccc00;
`
const Home = () => {
  return (
    <Container className='bg-slate-900'>
       
      <Left>
        <Desc>  WHY A NITARDO GAMESERVER?</Desc>
       <Title>Your benefits with a Nitrado Gameserver.</Title>
       </Left>
       
    </Container>
  )
}

export default Home