package com.cshbk.cshmint.common.vo.out;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * ==========================================
 * Project : cshmint > Session 사용자 정보
 * Created by 한소라 [ 2026. 7. 12. 오전 8:53 ]
 * Description :
 * ==========================================
 */
@Getter
public class LoginUser implements UserDetails {

  private final Long userSeq;
  private final String email;
  private final String userNm;
  private final String password;
  private final Collection<? extends GrantedAuthority> authorities;

  public LoginUser(Long userSeq, String email, String userNm,String password, Collection<? extends GrantedAuthority> authorities) {
    this.userSeq = userSeq;
    this.email = email;
    this.userNm = userNm;
    this.password = password;
    this.authorities = authorities;
  }

  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

}
