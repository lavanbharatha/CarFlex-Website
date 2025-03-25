import { animate, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
  ])
]);