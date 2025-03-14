import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderTitle>
          Thailan Ribeiro
        </S.HeaderTitle>
        <S.Empty />
        <nav>
          <S.NavLink to="/">Home</S.NavLink>
          <S.NavLink to="/about">About</S.NavLink>
          <S.NavLink to="/contact">Contact</S.NavLink>
        </nav>
      </S.Header>
      <S.ProfileImage>
        <S.Logo>
          <img src="https://avatars.githubusercontent.com/u/102111932?v=4" alt="Thailan Ribeiro" />
          <S.ProfileName>
            Thailan Ribeiro
          </S.ProfileName>
        </S.Logo>
      </S.ProfileImage>
    </S.Wrapper>
  );
}

export default Header;