Компонент для прокидывания конфига приложению. Помимо прочего, отвечает за установку [темы и платформы](#/PlatformsAndThemes).

> **Важно**
>
> Обратите внимание, что в вашем приложении должен быть только один `ConfigProvider`. Если вам необходимо
> переопределить какой-то из параметров, то это можно сделать с помощью [`PlatformProvider`](#/PlatformProvider),
> [`AppearanceProvider`](#/AppearanceProvider) или [`LocaleProvider`](#/LocaleProvider)
