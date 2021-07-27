import { burgersService } from '../services/burgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:combo', this.getByID)
      .post('', this.create)
      .put('/:combo', this.edit)
      .delete('/:combo', this.delete)
  }

  getAll(req, res, next) {
    try {
      const burger = burgersService.getAll()
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  getByID(req, res, next) {
    try {
      const burger = burgersService.getById(req.params.combo)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = burgersService.create(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      req.body.combo = req.params.combo
      const burger = burgersService.edit(req.params.combo)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      const burger = burgersService.delete(req.params.combo)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
