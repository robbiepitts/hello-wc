import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';
import { initializeCustomElement } from '@glimmer/web-component';

const app = new App();
const containerElement = document.getElementById('app');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
  }
});

initializeCustomElement(app, 'cool-input', 'cool-input-wc');
app.renderComponent('hello-wc', containerElement);
app.boot();
