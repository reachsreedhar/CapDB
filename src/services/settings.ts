export class SettingsService {
  private altBackground = false;

  public dbSettings = [
    '10.10.3.10',
    '10.10.3.13',
    '10.10.3.14',
    '10.10.3.15'
  ]

  public dbSet = {
    ip: '10.10.3.10'
  }

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}
