import React, { Component } from 'react';
import './Info.css';
class Info extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1" id="logout">
                        <div className="page-header">
                            <h3 className="reviews">Leave your comment</h3>
                            <div className="logout">
                                <button className="btn btn-default btn-circle text-uppercase" type="button" onclick="$('#logout').hide(); $('#login').show()">
                                    <span className="glyphicon glyphicon-off" /> Logout
          </button>
                            </div>
                        </div>
                        <div className="comment-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active"><a href="#comments-logout" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Comments</h4></a></li>
                                <li><a href="#add-comment" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Add comment</h4></a></li>
                                <li><a href="#account-settings" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Account settings</h4></a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="comments-logout">
                                    <ul className="media-list">
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Marco </h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        Great snippet! Thanks for sharing.
                    </p>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                    <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span className="glyphicon glyphicon-comment" /> 2 comments</a>
                                                </div>
                                            </div>
                                            <div className="collapse" id="replyOne">
                                                <ul className="media-list">
                                                    <li className="media media-replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> The Hipster</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Nice job Maria.
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media media-replied" id="replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://pbs.twimg.com/profile_images/442656111636668417/Q_9oP8iZ.jpeg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Mary</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Thank you Guys!
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Nico</h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        I'm looking for that. Thanks!
                    </p>
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/80lNjkcp6gI" allowFullScreen />
                                                    </div>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/lady_katherine/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Kriztine</h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        Yehhhh... Thanks for sharing.
                    </p>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                    <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyTwo"><span className="glyphicon glyphicon-comment" /> 1 comment</a>
                                                </div>
                                            </div>
                                            <div className="collapse" id="replyTwo">
                                                <ul className="media-list">
                                                    <li className="media media-replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Lizz</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Classy!
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="add-comment">
                                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-sm-2 control-label">Comment</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" name="addComment" id="addComment" rows={5} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="uploadMedia" className="col-sm-2 control-label">Upload media</label>
                                            <div className="col-sm-10">
                                                <div className="input-group">
                                                    <div className="input-group-addon">http://</div>
                                                    <input type="text" className="form-control" name="uploadMedia" id="uploadMedia" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button className="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span className="glyphicon glyphicon-send" /> Summit comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="account-settings">
                                    <form action="#" method="post" className="form-horizontal" id="accountSetForm" role="form">
                                        <div className="form-group">
                                            <label htmlFor="avatar" className="col-sm-2 control-label">Avatar</label>
                                            <div className="col-sm-10">
                                                <div className="custom-input-file">
                                                    <label className="uploadPhoto">
                                                        Edit
                      <input type="file" className="change-avatar" name="avatar" id="avatar" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Vilma palma" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nickName" className="col-sm-2 control-label">Nick name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="nickName" id="nickName" placeholder="Vilma" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="vilma@mail.com" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="newPassword" className="col-sm-2 control-label">New password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" name="newPassword" id="newPassword" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="col-sm-2 control-label">Confirm password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button className="btn btn-primary btn-circle text-uppercase" type="submit" id="submit">Save changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1" id="login">
                        <div className="page-header">
                            <h3 className="reviews">Leave your comment</h3>
                            <div className="logout">
                                <button className="btn btn-default btn-circle text-uppercase" type="button" onclick="$('#login').hide(); $('#logout').show()">
                                    <span className="glyphicon glyphicon-off" /> Login
          </button>
                            </div>
                        </div>
                        <div className="comment-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active"><a href="#comments-login" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Comments</h4></a></li>
                                <li><a href="#add-comment-disabled" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Add comment</h4></a></li>
                                <li><a href="#new-account" role="tab" data-toggle="tab"><h4 className="reviews text-capitalize">Create an account</h4></a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="comments-login">
                                    <ul className="media-list">
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Marco</h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        Great snippet! Thanks for sharing.
                    </p>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                    <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyThree"><span className="glyphicon glyphicon-comment" /> 2 comments</a>
                                                </div>
                                            </div>
                                            <div className="collapse" id="replyThree">
                                                <ul className="media-list">
                                                    <li className="media media-replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> The Hipster</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Nice job Maria.
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="media media-replied" id="replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://pbs.twimg.com/profile_images/442656111636668417/Q_9oP8iZ.jpeg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Mary</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Thank you Guys!
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Nico</h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        I'm looking for that. Thanks!
                    </p>
                                                    <div className="embed-responsive embed-responsive-16by9">
                                                        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/80lNjkcp6gI" allowFullScreen />
                                                    </div>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="pull-left" href="#">
                                                <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/lady_katherine/128.jpg" alt="profile" />
                                            </a>
                                            <div className="media-body">
                                                <div className="well well-lg">
                                                    <h4 className="media-heading text-uppercase reviews">Kriztine</h4>
                                                    <ul className="media-date text-uppercase reviews list-inline">
                                                        <li className="dd">22</li>
                                                        <li className="mm">09</li>
                                                        <li className="aaaa">2014</li>
                                                    </ul>
                                                    <p className="media-comment">
                                                        Yehhhh... Thanks for sharing.
                    </p>
                                                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                    <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyFour"><span className="glyphicon glyphicon-comment" /> 1 comment</a>
                                                </div>
                                            </div>
                                            <div className="collapse" id="replyFour">
                                                <ul className="media-list">
                                                    <li className="media media-replied">
                                                        <a className="pull-left" href="#">
                                                            <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg" alt="profile" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="well well-lg">
                                                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Lizz</h4>
                                                                <ul className="media-date text-uppercase reviews list-inline">
                                                                    <li className="dd">22</li>
                                                                    <li className="mm">09</li>
                                                                    <li className="aaaa">2014</li>
                                                                </ul>
                                                                <p className="media-comment">
                                                                    Classy!
                          </p>
                                                                <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="add-comment-disabled">
                                    <div className="alert alert-info alert-dismissible" role="alert">
                                        <button type="button" className="close" data-dismiss="alert">
                                            <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                                        </button>
                                        <strong>Hey!</strong> If you already have an account <a href="#" className="alert-link">Login</a> now to make the comments you want. If you do not have an account yet you're welcome to <a href="#" className="alert-link"> create an account.</a>
                                    </div>
                                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-sm-2 control-label">Comment</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" name="addComment" id="addComment" rows={5} disabled defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="uploadMedia" className="col-sm-2 control-label">Upload media</label>
                                            <div className="col-sm-10">
                                                <div className="input-group">
                                                    <div className="input-group-addon">http://</div>
                                                    <input type="text" className="form-control" name="uploadMedia" id="uploadMedia" disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button className="btn btn-success btn-circle text-uppercase disabled" type="submit" id="submitComment"><span className="glyphicon glyphicon-send" /> Summit comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="new-account">
                                    <form action="#" method="post" className="form-horizontal" id="commentForm" role="form">
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="name" id="name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" name="email" id="email" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-sm-2 control-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" name="password" id="password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="checkbox">
                                                <label htmlFor="agreeTerms" className="col-sm-offset-2 col-sm-10">
                                                    <input type="checkbox" name="agreeTerms" id="agreeTerms" /> I agree all <a href="#">Terms &amp; Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button className="btn btn-primary btn-circle text-uppercase" type="submit" id="submit">Create an account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-header text-center">
                    <h3 className="reviews"><span className="glyphicon glyphicon-magnet" /> Uicomments by <a href="https://twitter.com/maridlcrmn">maridlcrmn</a></h3>
                </div>
                <div className="notes text-center"><small>Image credits: uifaces.com</small></div>
            </div>

        );
    }
}

export default Info;