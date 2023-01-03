
import React from 'react'


export type CustomProps = { [key: string]: any }
export type ElementProps<TElement extends HTMLElement = HTMLElement>
    = React.HTMLProps<TElement>

export type DomProps<
    TElement extends HTMLElement = HTMLElement,
    TProps extends CustomProps = {}>
    = Omit<ElementProps<TElement>, keyof TProps>
    & TProps

export type ElemProps<TProps extends CustomProps = {}>
    = DomProps<HTMLElement, TProps>

export type DivProps<TProps extends CustomProps = {}>
	= DomProps<HTMLDivElement, TProps>
