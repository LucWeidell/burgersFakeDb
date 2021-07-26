import { fakeBurgersDb } from '../db/fakeBurgersDb'
import { BadRequest } from '../utils/Errors'

export class BurgersService {
  edit(combo) {
    const old = this.getById(combo.combo)
    for (const keys in old) {
      old[keys] = combo[keys]
    }
    return old
  }

  create(body) {
    fakeBurgersDb.burgers.push(body)
  }

  getById(combo) {
    const foundBurger = fakeBurgersDb.burgers.find(b => b.combo.toString() === combo)
    if (!foundBurger) {
      throw new BadRequest('Burger not found!')
    }
    return foundBurger
  }

  getAll() {
    return fakeBurgersDb.burgers
  }

  delete(combo) {
    fakeBurgersDb.burgers.splice((combo - 1), 1)
  }
}

export const burgersService = new BurgersService()
