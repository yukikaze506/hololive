import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class BasicStore<S> {
    /**
     * 現在の状態
     */
    protected readonly state$ = new BehaviorSubject<S>(this.initialSteta);

    constructor(protected readonly initialSteta: S) {}

    /**
     * 状態の初期化
     */
    initializeStore(): void {
        this.state$.next(this.initialSteta);
    }

    /**
     * 状態のObserverを生成する
     * @param selector Observerに流す値を状態から選別するセレクター
     */
    protected select<T>(selector: (state: S) => T): Observable<T> {
        return this.state$.pipe(map(selector), distinctUntilChanged());
    }

    /**
     * 状態を更新する
     * @param fn 状態の更新関数
     */
    protected update(fn: (state: S) => S): void {
        const current = this.state$.value;
        const next = fn(current);

        this.state$.next(next);
    }
}
