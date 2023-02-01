import type { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
export type DirectionType = 'top' | 'right' | 'bottom' | 'left'
export type StatusType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
