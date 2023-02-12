# Практические советы для PHP-разработчиков на Laravel

Привет, друг! 👋

Ниже я постарался очень коротко описать всё то, с чем ты обязательно столкнёшься разрабатывая [Laravel](https://github.com/laravel/laravel)-проекты на [PHP](https://www.php.net).

Не каждый из этих советов должен *строго* соблюдаться, и с ещё меньшим количеством принципов будут согласны абсолютно все разработчики. Это лишь рекомендации и некоторая отправная точка для начинающих [Laravel](https://github.com/laravel/laravel)-разработчиков.

Приятного и продуктивного программирования!

<br>

## Содержание

<!-- TODO Сделай сортировку пунктов от простого к сложному -->

### [Чистый код](#Чистый-код)
- [Следуйте принятым в команде соглашениям](#Следуйте-принятым-в-команде-соглашениям)
- [Не нужно создавать сущности без необходимости в них](#Не-нужно-создавать-сущности-без-необходимости-в-них)
- [Убирайте мёртвый код](#Убирайте-мёртвый-код)
- [Именование сущностей](#Именование-сущностей)
  - [Используйте значимые и произносимые имена](#Используйте-значимые-и-произносимые-имена)
  - [Используйте одно и тоже название для переменных с одинаковым назначением](#Используйте-одно-и-тоже-название-для-переменных-с-одинаковым-назначением)
  - [Не используйте слишком общие слова в названиях](#Не-используйте-слишком-общие-слова-в-названиях)
  - [Используйте имена, по которым удобно искать](#Используйте-имена-по-которым-удобно-искать)
  - [Используйте пояснительные переменные и константы](#Используйте-пояснительные-переменные-и-константы)
  - [Избегайте глубокой вложености](#Избегайте-глубокой-вложености)
  - [Не добавляйте ненужный контекст](#Не-добавляйте-ненужный-контекст)
  - [Используйте контроль типов](#Используйте-контроль-типов)
- [Сравнение](#Сравнение)
  - [Используйте идентичное сравнение](#Используйте-идентичное-сравнение)
  - [Оператор объединения с null](#Оператор-объединения-с-null)
- [Функции](#Функции)
  - [Аргументы функций (в идеале два или меньше)](#Аргументы-функций-в-идеале-два-или-меньше)
  - [Имена функций должны быть говорящими](#Имена-функций-должны-быть-говорящими)
  - [Не используйте флаги в качестве параметров функций](#Не-используйте-флаги-в-качестве-параметров-функций)
  - [Избегайте побочных эффектов](#Избегайте-побочных-эффектов)
  - [Не пишите в глобальные функции](#Не-пишите-в-глобальные-функции)
  - [Инкапсулирование условных выражений](#Инкапсулирование-условных-выражений)
  - [Избегайте негативных условных выражений](#Избегайте-негативных-условных-выражений)
  - [Избегайте условных выражений](#Избегайте-условных-выражений)
- [Объекты и структуры данных](#Объекты-и-структуры-данных)
  - [Используйте инкапсуляцию объектов](#Используйте-инкапсуляцию-объектов)
  - [У объектов должны быть private/protected компоненты](#У-объектов-должны-быть-privateprotected-компоненты)
- [Классы](#Классы)
  - [Композиция лучше наследования](#Композиция-лучше-наследования)
  - [Избегать Текучий интерфейс (Fluent interface)](#Избегать-Текучий-интерфейс-fluent-interface)

### [Архитектурные концепции](#Архитектурные-концепции)
- [Не повторяйся (Don’t repeat yourself, DRY)](#Не-повторяйся-dont-repeat-yourself-dry)
- [KISS](#KISS)
- MVC
- [SOLID](#solid)
  - [S: Принцип единственной ответственности](#Принцип-единственной-ответственности)
  - [O: Принцип открытости/закрытости](#Принцип-открытостизакрытости)
  - [L: Принцип подстановки Барбары Лисков](#Принцип-подстановки-Барбары-Лисков)
  - [I: Принцип разделения интерфейса](#Принцип-разделения-интерфейса)
  - [D: Принцип инверсии зависимостей](#Принцип-инверсии-зависимостей)

### [Паттерны проектирования](#Паттерны-проектирования)
- [Не используйте шаблон Одиночка (Singleton)](#Не-используйте-шаблон-Одиночка-singleton)

### Laravel
- *Текст раздела ещё не написан*

### GIT
- *Текст раздела ещё не написан*

### Тестирование
- *Текст раздела ещё не написан*

### [Рекомендую почитать](#Рекомендую-почитать)

<br>

# Чистый код

Здесь описаны общие принципы разработки ПО, многие из которых описаны в книге [*Clean Code*](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) Роберта Мартина. Это руководство по созданию читабельного, многократно используемого и пригодного для рефакторинга кода на PHP.

<br>

## Следуйте принятым в команде соглашениям

<!-- TODO Расписать -->
<!-- В одиночку большие проекты не пишутся -->
<!-- Нет ничего хуже когда каждый сам за себя -->
<!-- Вопрос отчасти решается автоматикой -->
>Текст раздела ещё не написан.

<br>

## Не нужно создавать сущности без необходимости в них

Всегда задумывайтесь над тем, какую **выгоду вы получите** выделив дополнительный класс или метод. Выделяя в отдельный метод пару строк, которые, при этом, еще и нигде больше не повторяются, вы можете только запутать и усложнить свой код.

**Плохо:**

```php

define('FOO_TITLE', 'Сумма ');

function sumOfInteger(integer $a, integer $b): integer
{
    return $a + $b;
}

echo FOO_TITLE . sumOfInteger(13, 42);
```

**Хорошо:**

```php
$first_number  = 13;
$second_number = 42;

echo FOO_TITLE . ($first_number + $second_number);
```

Этот принцип также часто называют [бритвой Оккама](https://ru.wikipedia.org/wiki/Бритва_Оккама).

<br>


<br>

## Именование сущностей

<!-- TODO Общие советы по названию переменных -->

<br/>

## Используйте значимые и произносимые имена

Это касается как имен переменных, так и классов/констант.

**Плохо:**

```php
$ymdstr = $moment->format('y-m-d');
```

**Хорошо:**

```php
$current_date = $moment->format('y-m-d');
```

<br/>

## Используйте одно и тоже название для переменных с одинаковым назначением

**Плохо:**

```php
$user_info;
$user_data;
$user_record;
$user_profile;
```

**Хорошо:**

```php
$user;
```

<br/>


## Используйте имена, по которым удобно искать

Мы прочитаем больше кода, чем когда-либо напишем. Поэтому важно писать такой код, который будет читабелен и удобен для поиска. Но давая переменным имена, бесполезные для понимания нашей программы, мы мешаем будущим читателям. Используйте такие имена, по которым удобно искать.

**Плохо:**

```php
$result = $serializer->serialize($data, 448);
```

**Хорошо:**

```php
$json = $serializer->serialize($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
```

<br/>

## Используйте пояснительные переменные и константы

Вместо [магических чисел](https://ru.wikipedia.org/wiki/Магическое_число_(программирование)), используйте хорошо именованные переменные и константы.

**Плохо:**

```php
class User
{
    public function calculateSalary(float $float): float // что передадут в переменной $float?
    {
        return $float * 1.23; // Что такое 1.23?
    }
}

// ...

$salary = $user->calculateSalary(345.0); // Почему 345.0?
```

**Хорошо:**

```php
class User
{
    // Региональный коэффициент
    private const REGIONAL_RATION = 1.23;

public function calculateSalary(float $base_salary): float
{
    return $base_salary * self::REGIONAL_RATION;
}
}

// ...

$salary = $user->calculateSalary($base_salary = 345.0);
```

<br/>

## Избегайте глубокой вложености

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

<br/>

## Не добавляйте ненужный контекст

Если имя вашего класса/объекта с чем-то у вас ассоциируется, не проецируйте эту ассоциацию на имя переменной.

**Плохо:**

```php
class Car
{
    public $car_make;
    public $car_model;
    public $car_color;

//...
}
```

**Хорошо:**

```php
class Car
{
    public $make;
    public $model;
    public $color;

//...
}
```

<br/>

### Используйте контроль типов

**Не хорошо:**

Это не хорошо потому, что переменная `$breweryName` может быть `NULL`.

```php
function createMicrobrewery($breweryName = 'Hipster Brew Co.'): void
{
    // ...
}
```

**Лучше:**

Это решение менее понятно, чем предыдущая версия, но лучше контролирует значение переменной.

```php
function createMicrobrewery($name = null): void
{
    $breweryName = $name ?: 'Hipster Brew Co.';
    // ...
}
```

**Хорошо:**

Вы можете использовать [контроль типов](https://www.php.net/manual/ru/language.types.declarations.php) и быть увереным, что переменная `$breweryName` никогда не будет `NULL`.

```php
function createMicrobrewery(string $breweryName = 'Hipster Brew Co.'): void
{
    // ...
}
```

<!-- ### Избегайте проверки типов (часть 2) -->
<!-- TODO Переработать текст ниже -->

PHP не типизирован, т. е. ваши функции могут принимать аргументы любых типов. Иногда такая свобода даже мешает и возникает соблазн выполнять проверку типов в функциях. Но есть много способов этого избежать. Первое, что нужно учитывать, это согласованные API.

**Плохо:**

```php
function travelToTexas($vehicle): void
{
    if ($vehicle instanceof Bicycle) {
        $vehicle->pedalTo(new Location('texas'));
    } elseif ($vehicle instanceof Car) {
        $vehicle->driveTo(new Location('texas'));
    }
}
```

**Хорошо:**

```php
function travelToTexas(Vehicle $vehicle): void
{
    $vehicle->travelTo(new Location('texas'));
}
```



Если вы работаете с базовыми примитивами (вроде строковых, целочисленных) и массивами, то не можете использовать полиморфизм. Но если кажется, что вам всё ещё нужна проверка типов и вы используете PHP 7+, то примените [объявление типов](https://www.php.net/manual/ru/language.types.declarations.php) или строгий режим (strict mode). Это даст вам статичную типизацию поверх стандартного PHP-синтаксиса. Проблема ручной проверки типов в том, что её качественное выполнение подразумевает такое многословие, что полученная искусственная "типобезопасность" не компенсирует потери читабельности кода. Сохраняйте чистоту своего PHP, пишите хорошие тесты и проводите качественные ревизии кода. Или делайте всё это, но со строгим объявлением PHP-типов или в строгом режиме.

**Плохо:**

```php
function combine($val1, $val2): int
{
    if (!is_numeric($val1) || !is_numeric($val2)) {
        throw new \Exception('Must be of type Number');
    }

return $val1 + $val2;
}
```

**Хорошо:**

```php
function combine(int $val1, int $val2): int
{
    return $val1 + $val2;
}
```

<br>

## Сравнение

<!-- TODO -->

<br>

## Используйте идентичное сравнение

**Не хорошо:**

При использовании простого сравнения, string будет преобразован в integer.

```php
$a = '42';
$b = 42;

if ($a != $b) {
    // The expression will always pass
}
```

Сравнение `$a != $b` возвращает `FALSE`, но на самом деле это `TRUE`!
Строка `42` отличается от строки числа `42`.

**Хорошо:**

Используя [идентичное сравнение](https://www.php.net/manual/ru/language.operators.comparison.php), будет сравнивать тип и значение.

```php
$a = '42';
$b = 42;

if ($a !== $b) {
    // The expression is verified
}
```

Сравнение `$a !== $b` возвращает `TRUE`.


<br>

## Оператор объединения с null

<!-- TODO Под вопросом, стоит ли это выносить в принцыпы -->

Оператор объединения с null (`??`), являющийся синтаксическим сахаром для достаточно распространенного действия, когда совместно используются тернарный оператор и функция `isset()`. Он возвращает первый операнд, если он задан и не равен `NULL`, а в обратном случае возвращает второй операнд.

**Не хорошо:**

```php
if (isset($_GET['name'])) {
    $name = $_GET['name'];
} elseif (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = 'nobody';
}
```

**Хорошо:**

```php
$name = $_GET['name'] ?? $_POST['name'] ?? 'nobody';
```

<br>

## Функции

<!-- TODO -->

<br>

## Аргументы функций (в идеале два или меньше)

<!-- TODO Переиеновать пункт -->

Крайне важно ограничивать количество параметров функций, потому что это упрощает тестирование. Больше трёх аргументов ведёт к "комбинаторному взрыву", когда вам нужно протестировать кучу разных случаев применительно к каждому аргументу.

Идеальный вариант — вообще без аргументов. Один-два тоже нормально, но трёх нужно избегать. Если их получается больше, то нужно объединять, чтобы уменьшить количество. Обычно если у вас больше двух аргументов, то функция делает слишком много. В тех случаях, когда это не так, чаще всего в качестве аргумента достаточно использовать более высокоуровневый объект.

**Плохо:**

```php
class Questionnaire
{
    public function __construct(
    string $firstname,
    string $lastname,
    string $patronymic,
    string $region,
    string $district,
    string $city,
    string $phone,
    string $email
    ) {
        // ...
    }
}
```

**Хорошо:**

```php
class Name
{
    private $firstname;
    private $lastname;
    private $patronymic;

public function __construct(string $firstname, string $lastname, string $patronymic)
{
    $this->firstname = $firstname;
    $this->lastname = $lastname;
    $this->patronymic = $patronymic;
}

// getters ...
}

class City
{
    private $region;
    private $district;
    private $city;

public function __construct(string $region, string $district, string $city)
{
    $this->region = $region;
    $this->district = $district;
    $this->city = $city;
}

// getters ...
}

class Contact
{
    private $phone;
    private $email;

public function __construct(string $phone, string $email)
{
    $this->phone = $phone;
    $this->email = $email;
}

// getters ...
}

class Questionnaire
{
    public function __construct(Name $name, City $city, Contact $contact)
    {
        // ...
    }
}
```

<br>

## Имена функций должны быть говорящими

<!-- TODO Пересекается с "Используйте значимые и произносимые имена" -->

**Плохо:**

```php
class Email
{
    //...

public function handle(): void
{
    mail($this->to, $this->subject, $this->body);
}
}

$message = new Email(...);
// What is this? A handle for the message? Are we writing to a file now?
$message->handle();
```

**Хорошо:**

```php
class Email
{
    //...

public function send(): void
{
    mail($this->to, $this->subject, $this->body);
}
}

$message = new Email(...);
$message->send(); // Понятно, что отправляем email
```

<br>

## Не используйте флаги в качестве параметров функций

<!-- TODO Переписать -->

Флаги говорят вашим пользователям, что функции делают больше одной вещи. А они должны делать что-то одно. Разделяйте свои функции, если они идут по разным ветвям кода в соответствии с булевой логикой.

**Плохо:**

```php
function createFile(string $name, bool $temp = false): void
{
    if ($temp) {
        touch('./temp/'.$name);
    } else {
        touch($name);
    }
}
```

**Хорошо:**

```php
function createFile(string $name): void
{
    touch($name);
}

function createTempFile(string $name): void
{
    touch('./temp/'.$name);
}
```

<br>

## Избегайте побочных эффектов

<!-- TODO Переписать -->

Функция может привносить побочные эффекты, если она не только получает значение и возвращает другое значение/значения, но и делает что-то ещё. Побочным эффектом может быть запись в файл, изменение глобальной переменной или случайная отправка всех ваших денег незнакомому человеку.

Но иногда побочные эффекты бывают нужны. Например, та же запись в файл. Лучше делать это централизованно. Не выбирайте несколько функций и классов, которые пишут в какой-то один файл, используйте для этого единый сервис. Единственный.

Главная задача — избежать распространённых ошибок вроде общего состояния для нескольких объектов без какой-либо структуры; использования изменяемых типов данных, которые могут быть чем-то перезаписаны; отсутствия централизованной обработки побочных эффектов. Если вы сможете это сделать, то будете счастливее подавляющего большинства других программистов.

**Плохо:**

```php
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
$name = 'Ryan McDermott';

function splitIntoFirstAndLastName(): void
{
    global $name;

$name = explode(' ', $name);
}

splitIntoFirstAndLastName();

var_dump($name); // ['Ryan', 'McDermott'];
```

**Хорошо:**

```php
function splitIntoFirstAndLastName(string $name): array
{
    return explode(' ', $name);
}

$name = 'Ryan McDermott';
$newName = splitIntoFirstAndLastName($name);

var_dump($name); // 'Ryan McDermott';
var_dump($newName); // ['Ryan', 'McDermott'];
```

<br>

## Не пишите в глобальные функции

<!-- TODO Rename item & rewrite -->
<!-- TODO Переписать -->

Засорение глобалами — дурная привычка в любом языке, потому что вы можете конфликтовать с другой библиотекой, а пользователи вашего API не будут об этом знать, пока не получат исключение в production. Приведу пример: вам нужен конфигурационный массив? Вы пишете глобальную функцию вроде `config()`, но она может конфликтовать с другой библиотекой, пытающейся делать то же самое.

**Плохо:**

```php
function config(): array
{
    return  [
    'foo' => 'bar',
    ];
}
```

**Хорошо:**

```php
class Configuration
{
    private $configuration = [];

public function __construct(array $configuration)
{
    $this->configuration = $configuration;
}

public function get(string $key): ?string
{
    // null coalescing operator
    return $this->configuration[$key] ?? null;
}
}
```

Загрузите конфигурацию и создайте экземпляр класса `Configuration`.

```php
$configuration = new Configuration([
'foo' => 'bar',
]);
```

И теперь вы должны использовать экземпляр класса `Configuration` в своем приложении.

<br>

## Инкапсулирование условных выражений

<!-- TODO -->

**Плохо:**

```php
if ($article->state === 'published') {
    // ...
}
```

**Хорошо:**

```php
if ($article->isPublished()) {
    // ...
}
```

<br>

## Избегайте негативных условных выражений

**Плохо:**

```php
function isDOMNodeNotPresent(\DOMNode $node): bool
{
    // ...
}

if (!isDOMNodeNotPresent($node))
{
    // ...
}
```

**Хорошо:**

```php
function isDOMNodePresent(\DOMNode $node): bool
{
    // ...
}

if (isDOMNodePresent($node)) {
    // ...
}
```

<br>

## Избегайте условных выражений

<!-- TODO Перенести в паттерны -->
<!-- TODO Переписать -->

Наверно, это кажется невозможным. Впервые это услышав, многие говорят: "Как я смогу что-либо сделать без выражения `if`?" Второй распространённый вопрос: "Ну, это прекрасно, но зачем мне это?" Ответ заключается в рассмотренном выше правиле чистого кода: функция должна делать что-то одно. Если у вас есть классы и функции, содержащие выражение `if`, то тем самым вы говорите своим пользователям, что функция делает больше одной вещи. Не забывайте — нужно оставить что-то одно.

**Плохо:**

```php
class Airplane
{
    // ...

public function getCruisingAltitude(): int
{
    switch ($this->type) {
        case '777':
        return $this->getMaxAltitude() - $this->getPassengerCount();
        case 'Air Force One':
        return $this->getMaxAltitude();
        case 'Cessna':
        return $this->getMaxAltitude() - $this->getFuelExpenditure();
    }
}
}
```

**Хорошо:**

```php
interface Airplane
{
    // ...

public function getCruisingAltitude(): int;
}

class Boeing777 implements Airplane
{
    // ...

public function getCruisingAltitude(): int
{
    return $this->getMaxAltitude() - $this->getPassengerCount();
}
}

class AirForceOne implements Airplane
{
    // ...

public function getCruisingAltitude(): int
{
    return $this->getMaxAltitude();
}
}

class Cessna implements Airplane
{
    // ...

public function getCruisingAltitude(): int
{
    return $this->getMaxAltitude() - $this->getFuelExpenditure();
}
}
```

<br>

## Объекты и структуры данных

<!-- TODO -->

<br>

## Используйте инкапсуляцию объектов

<!-- TODO Переписать -->

В PHP можно задать для методов ключевые слова `public`, `protected` и `private`. С их помощью вы будете управлять изменением свойств объекта.

* Если вам нужно не только получать свойство объекта, то необязательно находить и менять каждый метод чтения (accessor) в кодовой базе.
* Благодаря `set` проще добавить валидацию.
* Можно инкапсулировать внутреннее представление.
* С помощью геттеров и сеттеров легко добавлять журналирование и обработку ошибок.
* При наследовании такого класса вы можете переопределить функциональность по умолчанию.
* Вы можете лениво загружать свойства объекта, например получая их с сервера.

Также это часть принципа [Открытости/Закрытости](#Принцип-открытостизакрытости-openclosed-principle-ocp), входящего в набор объектно ориентированных принципов проектирования.

**Плохо:**

```php
class BankAccount
{
    public $balance = 1000;
}

$bankAccount = new BankAccount();

// Buy shoes...
$bankAccount->balance -= 100;
```

**Хорошо:**

```php
class BankAccount
{
    private $balance;

public function __construct(int $balance = 1000)
{
    $this->balance = $balance;
}

public function withdraw(int $amount): void
{
    if ($amount > $this->balance) {
        throw new \Exception('Amount greater than available balance.');
    }

$this->balance -= $amount;
}

public function deposit(int $amount): void
{
    $this->balance += $amount;
}

public function getBalance(): int
{
    return $this->balance;
}
}

$bankAccount = new BankAccount();

// Buy shoes...
$bankAccount->withdraw($shoesPrice);

// Get balance
$balance = $bankAccount->getBalance();
```

<br>

## У объектов должны быть private/protected компоненты

<!-- TODO Переписать -->

* `public`  методы и свойства наиболее опасны для изменений, поскольку внешний код может легко опираться на них, и вы не можете контролировать, какой код опирается на них. **Изменения в классе опасны для всех пользователей класса.**
* `protected` модификатор являются столь же опасными, как и `public`, поскольку они доступны в рамках любого дочернего класса. Это фактически означает, что разница между `public` и `protected` является только механизмом доступа, но гарантия инкапсуляции остается неизменной. **Модификации в классе опасны для всех классов потомков.**
* `private` модификатор гарантирует, что код **опасен для изменения только в границах одного класса** (вы защищены от модификаций, и у вас не будет [Jenga эффекта](http://www.urbandictionary.com/define.php?term=Jengaphobia&defid=2494196)).

Поэтому используйте `private` по умолчанию и `public/protected`, когда вам нужно предоставить доступ для внешних классов.

Для получения дополнительной информации вы можете прочитать [сообщение в блоге](http://fabien.potencier.org/pragmatism-over-theory-protected-vs-private.html), написанное [Fabien Potencier](https://github.com/fabpot).

**Плохо:**

```php
class Employee
{
    public $name;

public function __construct(string $name)
{
    $this->name = $name;
}
}

$employee = new Employee('John Doe');
echo 'Employee name: '.$employee->name; // Employee name: John Doe
```

**Хорошо:**

```php
class Employee
{
    private $name;

public function __construct(string $name)
{
    $this->name = $name;
}

public function getName(): string
{
    return $this->name;
}
}

$employee = new Employee('John Doe');
echo 'Employee name: '.$employee->getName(); // Employee name: John Doe
```

<br>

## Классы

<br>

## Композиция лучше наследования

<!-- TODO Переписать -->

Как говорится в известной книге "[*Шаблоны проектирования*](https://en.wikipedia.org/wiki/Design_Patterns)" Банды четырёх, по мере возможности нужно выбирать композицию, а не наследование. Есть много хороших причин использовать как наследование, так и композицию. Главная цель этой максимы заключается в том, если вы инстинктивно склоняетесь к наследованию, то постарайтесь представить, может ли композиция лучше решить вашу задачу. В каких-то случаях это действительно более подходящий вариант.

Вы спросите: "А когда лучше выбирать наследование?" Всё зависит от конкретной задачи, но можно ориентироваться на этот список ситуаций, когда наследование предпочтительнее композиции:

1. Ваше наследование — это взаимосвязь is-a, а не has-a. Пример: Человек → Животное vs. Пользователь → Детали пользователя (UserDetails).
2. Вы можете повторно использовать код из базовых классов. (Люди могут двигаться, как животные.)
3. Вы хотите внести глобальные изменения в производные классы, изменив базовый класс. (Изменение расхода калорий у животных во время движения.)

**Плохо:**

```php
class Employee
{
    private $name;
    private $email;

public function __construct(string $name, string $email)
{
    $this->name = $name;
    $this->email = $email;
}

// ...
}

// Bad because Employees "have" tax data.
// EmployeeTaxData is not a type of Employee

class EmployeeTaxData extends Employee
{
    private $ssn;
    private $salary;

public function __construct(string $name, string $email, string $ssn, string $salary)
{
    parent::__construct($name, $email);

$this->ssn = $ssn;
$this->salary = $salary;
}

// ...
}
```

**Хорошо:**

```php
class EmployeeTaxData
{
    private $ssn;
    private $salary;

public function __construct(string $ssn, string $salary)
{
    $this->ssn = $ssn;
    $this->salary = $salary;
}

// ...
}

class Employee
{
    private $name;
    private $email;
    private $taxData;

public function __construct(string $name, string $email)
{
    $this->name = $name;
    $this->email = $email;
}

public function setTaxData(EmployeeTaxData $taxData)
{
    $this->taxData = $taxData;
}

// ...
}
```

<br>

## Избегать Текучий интерфейс (Fluent interface)

<!-- TODO Спорный пункт -->

[Текучий интерфейс (Fluent interface)](https://ru.wikipedia.org/wiki/Fluent_interface) - это объектно-ориентированный API, целью которого является улучшение читабельности исходного кода с помощью [Цепочки методов (Method chaining)](https://en.wikipedia.org/wiki/Method_chaining).

Хотя могут быть некоторые случаи в которых этот шаблон уменьшает многословность кода (например, [PHPUnit Mock Builder](https://phpunit.de/manual/current/en/test-doubles.html) или [Doctrine Query Builder](http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/query-builder.html)), но чаще всего это происходит с некоторыми издержками:

1. Нарушение [Инкапсуляции](https://ru.wikipedia.org/wiki/Инкапсуляция_(программирование)).
2. Нарушение [Декораторов](https://ru.wikipedia.org/wiki/Декоратор_(шаблон_проектирования)).
3. Затрудняет [мокинг (mock)](https://ru.wikipedia.org/wiki/Mock-объект) в тестах.
4. Осложняет чтение diff коммитов.

Для получения дополнительной информации вы можете прочитать [сообщение в блоге](https://ocramius.github.io/blog/fluent-interfaces-are-evil/), написанное [Marco Pivetta](https://github.com/Ocramius).

**Плохо:**

```php
class Car
{
    private $make = 'Honda';
    private $model = 'Accord';
    private $color = 'white';

public function setMake(string $make): self
{
    $this->make = $make;

// NOTE: Returning this for chaining
return $this;
}

public function setModel(string $model): self
{
    $this->model = $model;

// NOTE: Returning this for chaining
return $this;
}

public function setColor(string $color): self
{
    $this->color = $color;

// NOTE: Returning this for chaining
return $this;
}

public function dump(): void
{
    var_dump($this->make, $this->model, $this->color);
}
}

$car = (new Car())
->setColor('pink')
->setMake('Ford')
->setModel('F-150')
->dump();
```

**Хорошо:**

```php
class Car
{
    private $make = 'Honda';
    private $model = 'Accord';
    private $color = 'white';

public function setMake(string $make): void
{
    $this->make = $make;
}

public function setModel(string $model): void
{
    $this->model = $model;
}

public function setColor(string $color): void
{
    $this->color = $color;
}

public function dump(): void
{
    var_dump($this->make, $this->model, $this->color);
}
}

$car = new Car();
$car->setColor('pink');
$car->setMake('Ford');
$car->setModel('F-150');
$car->dump();
```





<br>

# Архитектурные концепции

<br>

## SOLID

<!-- TODO Переписать -->

**SOLID** - это мнемонический акроним, введенный Michael Feathers для первых пяти принципов объектно-ориентированного программирования и дизайна, описанных Robert Martin.

* [S: Принцип единственной ответственности](#Принцип-единственной-ответственности)
* [O: Принцип открытости/закрытости](#Принцип-открытостизакрытости)
* [L: Принцип подстановки Барбары Лисков](#Принцип-подстановки-Барбары-Лисков)
* [I: Принцип разделения интерфейса](#Принцип-разделения-интерфейса)
* [D: Принцип инверсии зависимостей](#Принцип-инверсии-зависимостей)

<br>

## Принцип единственной ответственности

<!-- (Single Responsibility Principle, SRP) -->
<!-- TODO Поясни, что также относится к методам -->

Как говорится в книге Clean Code: "Для изменения класса никогда не должно быть более одной причины". Порой заманчиво набить класс всевозможной функциональностью, как мы это делаем с сумками и рюкзаками, которые разрешается взять в качестве ручной клади в самолёт. Проблема в том, что ваш класс не будет концептуально связанным (conceptually cohesive), и поэтому возникнет много причин изменить его. Важно минимизировать количество случаев, когда вам нужно изменять класс. А важно потому, что когда в классе избыток функциональности и вам нужно поменять её часть, то может быть трудно понять, как это отразится на зависимых модулях в кодовой базе.

**Плохо:**

```php
class UserSettings
{
    private $user;

public function __construct(User $user)
{
    $this->user = $user;
}

public function changeSettings(array $settings): void
{
    if ($this->verifyCredentials()) {
        // ...
    }
}

private function verifyCredentials(): bool
{
    // ...
}
}
```

**Хорошо:**

```php
class UserAuth
{
    private $user;

public function __construct(User $user)
{
    $this->user = $user;
}

public function verifyCredentials(): bool
{
    // ...
}
}

class UserSettings
{
    private $user;
    private $auth;

public function __construct(User $user)
{
    $this->user = $user;
    $this->auth = new UserAuth($user);
}

public function changeSettings(array $settings): void
{
    if ($this->auth->verifyCredentials()) {
        // ...
    }
}
}
```

<br>

## Принцип открытости/закрытости

<!-- (Open/Closed Principle, OCP) -->
<!-- TODO Переписать -->

Как сказал Bertrand Meyer: "Программные сущности (классы, модули, функции и т. д.) должны быть открыты для расширения, но закрыты для модифицирования". Что это означает? Позвольте пользователям добавлять новую функциональность без изменения кода.

**Плохо:**

```php
abstract class Adapter
{
    protected $name;

public function getName(): string
{
    return $this->name;
}
}

class AjaxAdapter extends Adapter
{
    public function __construct()
    {
        parent::__construct();

$this->name = 'ajaxAdapter';
}
}

class NodeAdapter extends Adapter
{
    public function __construct()
    {
        parent::__construct();

$this->name = 'nodeAdapter';
}
}

class HttpRequester
{
    private $adapter;

public function __construct(Adapter $adapter)
{
    $this->adapter = $adapter;
}

public function fetch(string $url): Promise
{
    $adapterName = $this->adapter->getName();

if ($adapterName === 'ajaxAdapter') {
    return $this->makeAjaxCall($url);
} elseif ($adapterName === 'httpNodeAdapter') {
    return $this->makeHttpCall($url);
}
}

private function makeAjaxCall(string $url): Promise
{
    // request and return promise
}

private function makeHttpCall(string $url): Promise
{
    // request and return promise
}
}
```

**Хорошо:**

```php
interface Adapter
{
    public function request(string $url): Promise;
}

class AjaxAdapter implements Adapter
{
    public function request(string $url): Promise
    {
        // request and return promise
    }
}

class NodeAdapter implements Adapter
{
    public function request(string $url): Promise
    {
        // request and return promise
    }
}

class HttpRequester
{
    private $adapter;

public function __construct(Adapter $adapter)
{
    $this->adapter = $adapter;
}

public function fetch(string $url): Promise
{
    return $this->adapter->request($url);
}
}
```

<br>

### Принцип подстановки Барбары Лисков

<!-- (Liskov Substitution Principle, LSP) -->
<!-- TODO Переписать (пример с кругами и квадратами) -->

За этим пугающим термином скрывается очень простая идея. Формальное определение: "Если S — это подтип Т, то объекты типа Т могут быть заменены объектами типа S (например, вместо объектов типа Т можно подставить объекты типа S) без изменения каких-либо свойств программы (корректность, задачи и т. д.)". Ещё более пугающее определение.

Можно объяснить проще: если у вас есть родительский и дочерний классы, тогда они могут быть взаимозаменяемы без получения некорректных результатов. Рассмотрим классический пример с квадратом и прямоугольником. С точки зрения математики квадрат — это прямоугольник, но если смоделировать эту взаимосвязь is-a посредством наследования, то у вас будут проблемы.

**Плохо:**

```php
class Rectangle
{
    protected $width = 0;
    protected $height = 0;

public function setWidth(int $width): void
{
    $this->width = $width;
}

public function setHeight(int $height): void
{
    $this->height = $height;
}

public function getArea(): int
{
    return $this->width * $this->height;
}
}

class Square extends Rectangle
{
    public function setWidth(int $width): void
    {
        $this->width = $this->height = $width;
    }

public function setHeight(int $height): void
{
    $this->width = $this->height = $height;
}
}

function printArea(Rectangle $rectangle): void
{
    $rectangle->setWidth(4);
    $rectangle->setHeight(5);

// BAD: Will return 25 for Square. Should be 20.
echo sprintf('%s has area %d.', get_class($rectangle), $rectangle->getArea()).PHP_EOL;
}

$rectangles = [new Rectangle(), new Square()];

foreach ($rectangles as $rectangle) {
    printArea($rectangle);
}
```

**Хорошо:**

Лучший способ - разделить четырехугольники и выделить более общий подтип для обеих фигур.

Несмотря на кажущееся сходство квадрата и прямоугольника, они разные.
Квадрат имеет много общего с ромбом, а прямоугольник с параллелограммом, но они не являются подтипом.
Квадрат, прямоугольник, ромб и параллелограмм - это отдельные фигуры со своими собственными свойствами, хотя и схожими.

```php
interface Shape
{
    public function getArea(): int;
}

class Rectangle implements Shape
{
    private $width = 0;
    private $height = 0;

public function __construct(int $width, int $height)
{
    $this->width = $width;
    $this->height = $height;
}

public function getArea(): int
{
    return $this->width * $this->height;
}
}

class Square implements Shape
{
    private $length = 0;

public function __construct(int $length)
{
    $this->length = $length;
}

public function getArea(): int
{
    return $this->length ** 2;
}
}

function printArea(Shape $shape): void
{
    echo sprintf('%s has area %d.', get_class($shape), $shape->getArea()).PHP_EOL;
}

$shapes = [new Rectangle(4, 5), new Square(5)];

foreach ($shapes as $shape) {
    printArea($shape);
}
```

<br>

## Принцип разделения интерфейса

<!-- (Interface Segregation Principle, ISP) -->
<!-- TODO Переписать -->

Согласно ISP, "Клиенты не должны зависеть от интерфейсов, которые не используют".

Хороший пример демонстрации принципа: классы, для которых требуются большие объекты настроек (settings objects). Рекомендуется не требовать от клиентов настраивать много параметров, потому что по большей части они им не нужны. Если сделать их опциональными, то это поможет избежать раздутости интерфейса.

**Плохо:**

```php
interface Employee
{
    public function work(): void;

public function eat(): void;
}

class HumanEmployee implements Employee
{
    public function work(): void
    {
        // ....working
    }

public function eat(): void
{
    // ...... eating in lunch break
}
}

class RobotEmployee implements Employee
{
    public function work(): void
    {
        //.... working much more
    }

public function eat(): void
{
    //.... robot can't eat, but it must implement this method
}
}
```

**Хорошо:**

Не каждый работник является сотрудником, но каждый сотрудник является работником.

```php
interface Workable
{
    public function work(): void;
}

interface Feedable
{
    public function eat(): void;
}

interface Employee extends Feedable, Workable
{
}

class HumanEmployee implements Employee
{
    public function work(): void
    {
        // ....working
    }

public function eat(): void
{
    //.... eating in lunch break
}
}

// robot can only work
class RobotEmployee implements Workable
{
    public function work(): void
    {
        // ....working
    }
}
```

<br>

## Принцип инверсии зависимостей

<!-- (Dependency Inversion Principle, DIP) -->
<!-- TODO Переписать -->

Этот принцип гласит:

1. Высокоуровневые модули не должны зависеть от низкоуровневых. Оба вида должны зависеть от абстракций.
2. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

Сначала это может быть трудным для понимания, но если вы работали с PHP-фреймворками (вроде Symfony), то уже встречались с реализацией этого принципа в виде инъекции зависимости (Dependency Injection, DI). Однако эти принципы не идентичны, DI ограждает высокоуровневые модули от деталей своих низкоуровневых модулей и их настройки. Это может быть сделано посредством DI. Огромное преимущество в том, что снижается сцепление (coupling) между модулями. Сцепление — очень плохой шаблон разработки, затрудняющий рефакторинг кода.

**Плохо:**

```php
class Employee
{
    public function work(): void
    {
        // ....working
    }
}

class Robot extends Employee
{
    public function work(): void
    {
        //.... working much more
    }
}

class Manager
{
    private $employee;

public function __construct(Employee $employee)
{
    $this->employee = $employee;
}

public function manage(): void
{
    $this->employee->work();
}
}
```

**Хорошо:**

```php
interface Employee
{
    public function work(): void;
}

class Human implements Employee
{
    public function work(): void
    {
        // ....working
    }
}

class Robot implements Employee
{
    public function work(): void
    {
        //.... working much more
    }
}

class Manager
{
    private $employee;

public function __construct(Employee $employee)
{
    $this->employee = $employee;
}

public function manage(): void
{
    $this->employee->work();
}
}
```

<br>

## Не повторяйся!

<!-- (Don’t repeat yourself, DRY) -->
<!-- TODO Переписать -->
<!-- TODO Не применим к тестам -->

Постарайтесь соблюдать принцип [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Старайтесь полностью избавиться от дублирующего кода. Он плох тем, что если вам нужно менять логику, то это придётся делать в нескольких местах.

Представьте, что вы владеете ресторанчиком и отслеживаете, есть ли продукты: помидоры, лук, чеснок, специи и т. д. Если у вас несколько списков с содержимым холодильников, то вам придётся обновлять их все, когда вы готовите какое-то блюдо. А если список один, то и вносить изменения придётся только в него.

Зачастую дублирующий код возникает потому, что вы делаете две и более вещи, у которых много общего. Но небольшая разница между ними заставляет вас писать несколько функций, и те по большей части делают одно и то же. Удаление дублирующего кода означает, что вы создаёте абстракцию, которая может обрабатывать все различия с помощью единственной функции/модуля/класса.

Правильный выбор абстракции критически важен, поэтому нужно следовать принципам SOLID, описанным в разделе "[Классы](#Классы)". Плохие абстракции могут оказаться хуже дублирующего кода, так что будьте осторожны! Но если можете написать хорошие, то делайте это! Не повторяйтесь, иначе окажется, что при каждом изменении вам нужно обновлять код в нескольких местах.

**Плохо:**

```php
function showDeveloperList(array $developers): void
{
    foreach ($developers as $developer) {
        $expectedSalary = $developer->calculateExpectedSalary();
        $experience = $developer->getExperience();
        $githubLink = $developer->getGithubLink();
        $data = [
        $expectedSalary,
        $experience,
        $githubLink
        ];

render($data);
}
}

function showManagerList(array $managers): void
{
    foreach ($managers as $manager) {
        $expectedSalary = $manager->calculateExpectedSalary();
        $experience = $manager->getExperience();
        $githubLink = $manager->getGithubLink();
        $data = [
        $expectedSalary,
        $experience,
        $githubLink
        ];

render($data);
}
}
```

**Хорошо:**

```php
function showList(array $employees): void
{
    foreach ($employees as $employee) {
        $expectedSalary = $employee->calculateExpectedSalary();
        $experience = $employee->getExperience();
        $githubLink = $employee->getGithubLink();
        $data = [
        $expectedSalary,
        $experience,
        $githubLink
        ];

render($data);
}
}
```

**Очень хорошо:**

Лучше использовать компактную версию кода.

```php
function showList(array $employees): void
{
    foreach ($employees as $employee) {
        render([
        $employee->calculateExpectedSalary(),
        $employee->getExperience(),
        $employee->getGithubLink()
        ]);
    }
}
```

<br>

## Не используйте шаблон Одиночка (Singleton)

<!-- TODO Переписать -->

Шаблон проектирования Одиночка (Singleton) является [антипаттерном](https://ru.wikipedia.org/wiki/Одиночка_(шаблон_проектирования)). Перефразируем Brian Button:

1. Как правило, одиночки используются в качестве **глобального экземпляра**, почему это так плохо? Потому, что вы **скрываете зависимости вашего приложения** в своем коде, вместо того, чтобы сделать их явными через интерфейсы. Сделать что-то глобальным, чтобы избежать его распространения - это [чем-то попахивает](https://ru.wikipedia.org/wiki/Код_с_запашком).
2. Одиночки нарушают принцип [единой ответственности](#Принцип-единственной-ответственности-single-responsibility-principle-srp): в силу того, что **они контролируют собственное создание и жизненный цикл**.
3. Одиночки по своей сути приводят к тому, что код получается тесно [связанным](https://ru.wikipedia.org/wiki/Зацепление_(программирование)). Это во многих случаях **затрудняет его тестирование**.
4. Одиночки несут состояние на протяжении всей жизни приложения. Еще один удар по тестированию, **так как вы можете столкнуться с ситуацией, когда необходимо закончить тесты**, что является большим нет для модульных тестов. Зачем? Потому что каждый модульный тест должен быть независимым от другого.

[Misko Hevery](http://misko.hevery.com/about/) также очень хорошо разбирается в [корне проблемы](http://misko.hevery.com/2008/08/25/root-cause-of-singletons/).

**Плохо:**

```php
class DBConnection
{
    private static $instance;

private function __construct(string $dsn)
{
    // ...
}

public static function getInstance(): DBConnection
{
    if (self::$instance === null) {
        self::$instance = new self();
    }

return self::$instance;
}

// ...
}

$singleton = DBConnection::getInstance();
```

**Хорошо:**

```php
class DBConnection
{
    public function __construct(string $dsn)
    {
        // ...
    }

// ...
}
```

Создайте экземпляр класса `DBConnection` и настройте его с помощью [DSN](https://www.php.net/manual/ru/pdo.construct.php#refsect1-pdo.construct-parameters).

```php
$connection = new DBConnection($dsn);
```

И теперь вы должны использовать экземпляр класса `DBConnection` в своем приложении.


<br>

# Laravel

<!-- TODO -->
>Текст раздела ещё не написан

<br>

# GIT

<!-- TODO -->
>Текст раздела ещё не написан

<br>

# Тестирование

<!-- TODO -->
>Текст раздела ещё не написан

<br>

# Рекомендую почитать

- Clean Code concepts adapted for PHP [jupeter/clean-code-php](https://github.com/jupeter/clean-code-php)
- Концепции Чистого Кода, адаптированные для PHP [peter-gribanov/clean-code-php](https://github.com/peter-gribanov/clean-code-php)
- Книга [*Clean Code*](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

