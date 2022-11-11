import { animate, state, style, transition, trigger } from "@angular/animations";

export const fade = trigger("fade", [
  transition(':enter', [
    style({ opacity: 0}),
      animate(300, style({
        opacity: 1
      })),
  ]),
  transition(':leave', [
    style({ opacity: 1}),
      animate(300, style({
        opacity: 0
      })),
  ])
]);


export const fadeLong = trigger("fadeLong", [
  transition(':enter', [
    style({ opacity: 0}),
    animate(150, style({
      opacity: 0
    })),
      animate(300, style({
        opacity: 1
      })),
  ]),
  transition(':leave', [
    style({ opacity: 1}),
      animate(300, style({
        opacity: 0
      })),
  ])
]);


export const moveState =
  trigger('moveState', [
    state('move', style({
      transform: 'translateY({{movement}}px)'
    }), {params : { movement: "-10" }}),
    state('moveAgain', style({
      transform: 'translateY({{movement}}px)'
    }), {params : { movement: "-10" }}),
    state('static', style({
      transform: 'translateY(0)'
    })),
    transition('* => move', animate('{{timing}}ms 300ms ease-in'), {params : { timing: "500" }}),
    transition('* => moveAgain', animate('{{timing}}ms 300ms ease-in'), {params : { timing: "500" }}),
    transition('* => static', animate('{{timing}}ms 300ms linear'), {params : { timing: "500" }})
  ])

