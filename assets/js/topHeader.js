export default function TopHeader() {
  const topHeader = createElement('div', { id: 'top-header' });
  const container = createElement(
    'div',
    {class: 'container d-flex align-items-center justify-content-center'}
  );
  const offer = createElement(
    'p',
    {class: 'offer'},
    'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! '
  );
  const shopNow = createElement('a', {class: 'shop-now', href: '#'}, 'ShopNow');
  const button = createElement(
    'button',
    { class: 'btn dropdown-toggle d-flex align-items-center language', type: 'button', 'data-bs-toggle': 'dropdown', 'aria-expanded': 'false' },
    [
      createElement('span', {}, 'English'),
      createElement('img', { src: 'assets/images/dropdown.svg', alt: 'Dropdown Icon' })
    ]
  );
  
  // Create the dropdown-menu element
  const dropdownMenu = createElement('ul', { class: 'dropdown-menu' });
  
  // Create the btn-group container and append the button and dropdownMenu
  const btnGroup = createElement('div', { class: 'btn-group' }, [button, dropdownMenu]);

  topHeader.appendChild(container);
  container.appendChildren(offer, btnGroup);
  offer.appendChild(shopNow);

  return topHeader;
}