import SaibaMais from './BotaoSaibaMais'

export default function NavBar() {
  return (
    <div className='nav_bar'>
      <div className="esquerda">
        <h1>Logo</h1>
        <ol>
          <a href="#">Home</a>
          <a href="#">Localização</a>
          <a href="#">Serviços</a>
        </ol>
      </div>
      <a href="#">
        <SaibaMais />
      </a>
    </div>
  )
}