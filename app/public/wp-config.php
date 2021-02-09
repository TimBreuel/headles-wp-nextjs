<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uKdLySlR2FJnTrHghPeL8qjQhWmsWbW9T3mrOXEUFUahWWOUVmBBiPqil85HM9IQ4RVvyOrBtMwOd8vfSz39Kw==');
define('SECURE_AUTH_KEY',  'bmondVDEVtRxFNsig/0JKm93sCdQZ8qwEaNlOCMOIqpvJWAzbjgtP7onnga6k1Rwp98l3rfEYAljME53O+iBIQ==');
define('LOGGED_IN_KEY',    '+3SeSuxoAn0EFMSuG25n/6jQwsEzvtWPctTsesTAJ5oMTRqvTOAXAlDLQ6QyFjszwQaKAaJDxKhFm2IB8ghc2g==');
define('NONCE_KEY',        '5Az3YGkwYZaq82Zvwo8QNoVuKYapqtJScCZ191n6PG3098jp+dv8Aio90Oa0F5BGNpKv67ubrr4O2bwosepq7A==');
define('AUTH_SALT',        'gJ7AETVFJwR8kVk269mt/DJOQxdzjlcnL1ZXlF8HYNgQykHY8dgyUdHCykM+p6+K5spDqAJzQrH7Ca86UJE8Nw==');
define('SECURE_AUTH_SALT', 'RmD8kKQvckrAl0onf4OG/d99jd7NtyQ4XtAjR4pbIskIxBK+rY60532huqdEkKAGg1EwAu2ZWihd5k9zTtaWjA==');
define('LOGGED_IN_SALT',   'ny29omrOZqXdmhMDhZJ5mk0IXrKJ4QDSWF+AmN391wOeNYMhw34/kfMBWgiiEJcf+T6QTqooEpp4QCOZIC8XEw==');
define('NONCE_SALT',       'XjJPhRIgeMBDWTyzCrXgHch7yZS4KGBVb6VlgDsLrm36CvmfXS3d3XalKFQft2Bq/hkPwwNZqdahy85CBqjUDQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
