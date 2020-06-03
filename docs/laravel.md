---
title: Laravel
description: Integrate Tranzlate with your Laravel project with the composer package.
keywords:
    - laravel
    - artisan
    - composer
---

Support for Laravel can be done through the [Composer package](https://github.com/Tranzlate/composer-laravel).

After creating translations for your project, you can sync those translations with your Laravel project with the help of the Composer package and the artisan command it provides.

### Create a personal access token

The first step is to [create a personal access token](https://tranzlate.io/d/a/api/generate-token) from your Settings view on https://tranzlate.io. Make sure you save the token somewhere safe.

:::note Email verification required
You will need to verify your email address in order to create a personal access token.
:::

### Install the composer package

```bash
composer require tranzlate/laravel --dev
```

### Publish configuration file and fill in values

Next, we will have to publish the configuration file. This will allow us to set the secret, project id, and the target location for translations (`resources/lang` for [Laravel projects](https://laravel.com/docs/7.x/localization#introduction)).

```bash
php artisan vendor:publish --provider="Tranzlate\ServiceProvider"
```

There are 3 environment variables you will need to set. You may need to set all 3 for your project. You will need the personal access token you created in the first step, your project id, and the target path for the translations if you wish to change from the default one. It is recommended you add the values to your `.env` file.

```php title=".env"
TRANZLATE_PROJECT_ID=project-id
TRANZLATE_API_TOKEN=api-token
TRANZLATE_PATH=resources/lang-2
```

### Download translations

Now you can just use the artisan command to download your project translations to your local project.

```bash
php artisan tranzlate:download
```

## How are the translation files created?

For Laravel, the `key` structure dictates how the files will be organized. Key sections are split by the period element `.`. The first element will be the file name. The remaining elements will be an array structure.

Let's look at 1 example.

For the following keys:

```
auth.failed
validation.gt.numeric
validation.email
```

The Composer package will download 2 files for each language:

```
resources
└── lang
    └── en
        |── auth.php
        └── validation.php
```

```php title="auth.php"
[
    'failed' => 'These credentials do not match our records.',
];
```

```php title="validation.php"
[
    'email' => 'The :attribute must be a valid email address.',
    'gt' => [
        'numeric' => 'The :attribute must be greater than :value.'
    ]
];
```

## Placeholders

[Laravel placeholders](https://laravel.com/docs/7.x/localization#replacing-parameters-in-translation-strings) are also supported.

You can define a placeholder by surrounding it with curly braces `{...}`.

When downloading your translations, they will be formatted correctly for Laravel by transforming the curly braces to the Laravel preferred method of prepended colon `:`.

For example, the following translation:

```
Too many login attempts. Please try again in {seconds} seconds.
```

Will be transformed to:

```
Too many login attempts. Please try again in :seconds seconds.
```

## Pluralization

Support for pluralization is planned and coming.

[Let us know](mailto:support@tranzlate.io) if you require it. It will help with the planning of incoming features.
