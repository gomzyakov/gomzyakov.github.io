---
layout: post
title:  "Избегайте глубокой вложенности"
author: gomzyakov
categories: [ Чистый код, PHP, Laravel ]
image: assets/images/2023-02-14-avoid-deep-nesting.jpg
---

Слишком много `if/else` утверждений может сделать ваш код трудно понимаемым:

```php
function isShopOpen($day): bool
{
    if ($day) {
        if (is_string($day)) {
            $day = strtolower($day);
            if ($day === 'friday') {
                return true;
            } elseif ($day === 'saturday') {
                return true;
            } elseif ($day === 'sunday') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
```

По возможности, старайтесь вернуть значение как можно раньше, не допуская бесполезной вложенности:


```php
function isShopOpen(string $day): bool
{
    if (empty($day)) {
        return false;
    }

$opening_days = ['friday', 'saturday', 'sunday'];

return in_array(strtolower($day), $opening_days, true);
}
```

<!-- TODO Пояснение, что пересекается с принципом "Fail Fast" -->

