/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/examples').render('pages/examples')
router.on('/examples/sparkles').render('pages/examples', { sparkles: true })
router.on('/quote').render('components/quote')
