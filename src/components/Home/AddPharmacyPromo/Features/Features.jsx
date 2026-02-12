import css from './Features.module.css';

export default function Features() {
    return (
      <div className={css.features}>
        <ul>
          <li>Take user orders form online</li>
          <li>Create your shop profile</li>
          <li>Manage your store</li>
          <li>Get more orders</li>
          <li>Storage shed</li>
        </ul>
      </div>
    );
}