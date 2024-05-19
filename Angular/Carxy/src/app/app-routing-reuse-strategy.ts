import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[this.getRouteKey(route)] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[this.getRouteKey(route)];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.handlers[this.getRouteKey(route)];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getRouteKey(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot.map(r => r.url.map(segment => segment.toString()).join('/')).join('/');
  }
}
