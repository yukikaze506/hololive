import { EventEmitter, OnDestroy } from '@angular/core';

/**
 * ComponentにDestroy関数とそのEventEmitterを拡張する基底クラス
 */
export class OnDestroyEmitter implements OnDestroy {
    /**
     * Component破棄のEventEmitter
     */
    readonly onDestroy$ = new EventEmitter<void>();

    /**
     * ComponentのDestroyイベントハンドラ
     */
    ngOnDestroy(): void {
        this.onDestroy$.emit();
    }
}
