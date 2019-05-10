import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        // transition('HomePage <=> AboutPage', [
        //     style({ position: 'relative' }),
        //     query(':enter, :leave', [
        //         style({
        //             position: 'absolute',
        //             top: 0,
        //             left: 0,
        //             width: '100%'
        //         })
        //     ]),
        //     query(':enter', [
        //         style({ left: '-100%' })
        //     ]),
        //     query(':leave', animateChild()),
        //     group([
        //         query(':leave', [
        //             animate('300ms ease-out', style({ left: '100%' }))
        //         ]),
        //         query(':enter', [
        //             animate('300ms ease-out', style({ left: '0%' }))
        //         ])
        //     ]),
        //     query(':enter', animateChild()),
        // ]),
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({  transform: 'translateY(-10%)', opacity: 0 })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('0s ease-out', style(
                        {
                            opacity: 0
                        }))
                ], { optional: true }),
                query(':enter', [
                    animate('700ms ease-out', style(
                        {
                            transform: 'translateY(0%)', 
                            opacity: .8
                        }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ])
    ]);