import Logo from '../../public/images/logos/w-logo.svg';

const Header = () => {
  return (
    <div className='container mx-auto px-4 bg-primary'>
      <div class='flex items-center py-5'>
        <div class='flex-auto'>
          <img src={Logo.src} alt='logo' />
        </div>
        <div class='flex items-center space-x-4'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
