import type IUser from '@/interfaces/IUser';

const API_URL = 'https://utcancun.a.pinggy.online';

export default {
  async getUsers(): Promise<IUser[]> {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos de los usuarios');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const response = await fetch(`${API_URL}/user?email=${email}`);
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos del usuario');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async registerUser(name: string, email: string, password: string, group: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, group })
      });
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
