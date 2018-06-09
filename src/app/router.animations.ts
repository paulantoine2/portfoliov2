import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('about => portfolio', [
    /* order */
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter .wrapper', style({ opacity: '0', transform: 'translateY(100%)' })),
    query(':leave .wrapper, :leave .highlighted', [
      style({ opacity: '1'}),
      animate('.2s ease', style({ opacity: '0' }))
    ]),
    group([
      query(':leave .bg', [
        style({ top: '0', transform: 'skew(0deg, -4deg)' }),
        animate('.5s ease-in-out', style({ top: 'calc(-100% + 75px)', transform: 'skew(0deg, 0deg)' }))
      ]),
      query(':enter .wrapper', [
        animate('.5s 200ms ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
      ]),
    ]),
    query(':leave .bg', [
      animate('.5s ease-in-out', style({ opacity: '0' }))
    ]),
  ]),
  transition('portfolio => about', [
    /* order */
    query(':leave', style({ zIndex: '-100' })),
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter .bg', style({ top: 'calc(-100% + 75px)', transform: 'skew(0deg, 0deg)' })),
    query(':enter .wrapper, :enter .highlighted', style({ opacity: '0'})),
    group([
      query(':leave .wrapper', [
        animate('.5s  ease-in-out', style({ opacity: '0', transform: 'translateY(100%)' }))
      ]),
      query(':enter .bg', [
        animate('.5s 200ms ease-in-out', style({ top: '0', transform: 'skew(0deg, -4deg)' }))
      ])
    ]),
    query(':enter .wrapper, :enter .highlighted', [
      animate('.2s ease', style({ opacity: '1' }))
    ])
  ])
]);
